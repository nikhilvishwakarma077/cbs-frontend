package com.bank.cbs.service;

import com.bank.cbs.dto.DepositRequestDTO;
import com.bank.cbs.dto.TransferRequestDTO;
import com.bank.cbs.dto.WithdrawRequestDTO;
import com.bank.cbs.entity.Account;
import com.bank.cbs.entity.Transaction;
import com.bank.cbs.repository.AccountRepository;
import com.bank.cbs.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class TransactionService {

    @Autowired
    private AccountRepository accountRepo;

    @Autowired
    private TransactionRepository transactionRepo;

    public Transaction deposit(DepositRequestDTO dto) {

        Account account = accountRepo.findById(dto.getAccountId()).orElseThrow();

        // Update balance
        account.setBalance(account.getBalance() + dto.getAmount());
        accountRepo.save(account);

        // Create transaction
        Transaction txn = new Transaction();
        txn.setAccount(account);
        txn.setAmount(dto.getAmount());
        txn.setType("CREDIT");
        txn.setTimestamp(LocalDateTime.now());

        return transactionRepo.save(txn);
    }

    public Transaction withdraw(WithdrawRequestDTO dto)
    {
        Account account = accountRepo.findById(dto.getAccountId()).orElseThrow();

        // Balance check
        if(account.getBalance() < dto.getAmount())
        {
            throw new RuntimeException("Insufficient balance");
        }

        // Deduct balance
        account.setBalance(account.getBalance() - dto.getAmount());
        accountRepo.save(account);

        // Create transaction
        Transaction txn = new Transaction();
        txn.setAccount(account);
        txn.setAmount(dto.getAmount());
        txn.setType("DEBIT");
        txn.setTimestamp(LocalDateTime.now());

        return transactionRepo.save(txn);
    }

    public String transfer(TransferRequestDTO dto)
    {
        Account fromAccount = accountRepo.findById(dto.getAccountId()).orElseThrow();
        Account toAccount = accountRepo.findById(dto.getToAccountId()).orElseThrow();

        // Balance check
        if (fromAccount.getBalance() < dto.getAmount())
        {
            throw new RuntimeException("Insufficient balance");
        }

        // Deduct from sender
        fromAccount.setBalance(fromAccount.getBalance() - dto.getAmount());
        accountRepo.save(fromAccount);

        // Add to receiver
        toAccount.setBalance(toAccount.getBalance() + dto.getAmount());
        accountRepo.save(toAccount);

        // DEBIT transaction
        Transaction debitTxn = new Transaction();
        debitTxn.setAccount(fromAccount);
        debitTxn.setAmount(dto.getAmount());
        debitTxn.setType("DEBIT");
        debitTxn.setTimestamp(LocalDateTime.now());
        transactionRepo.save(debitTxn);

        // CREDIT transaction
        Transaction creditTxn = new Transaction();
        creditTxn.setAccount(toAccount);
        creditTxn.setAmount(dto.getAmount());
        creditTxn.setType("CREDIT");
        creditTxn.setTimestamp(LocalDateTime.now());
        transactionRepo.save(creditTxn);

        return "Transfer Successful";
    }
}