package com.bank.cbs.controller;

import com.bank.cbs.dto.DepositRequestDTO;
import com.bank.cbs.dto.TransferRequestDTO;
import com.bank.cbs.dto.WithdrawRequestDTO;
import lombok.With;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import com.bank.cbs.entity.Transaction;
import com.bank.cbs.repository.TransactionRepository;
import com.bank.cbs.service.TransactionService;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/transaction")
public class TransactionController {

    @Autowired
    private TransactionService service;

    @Autowired
    private TransactionRepository repository;

    @PostMapping("/deposit")
    public Transaction deposit(@RequestBody DepositRequestDTO dto) {
        return service.deposit(dto);
    }

    @GetMapping("/account/{accountId}")
    public List<Transaction> getTransactions(@PathVariable Long accountId) {
        return repository.findByAccountAccountId(accountId);
    }

    @PostMapping("/withdraw")
    public Transaction withdraw(@RequestBody WithdrawRequestDTO dto)
    {
        return service.withdraw(dto);
    }

    @PostMapping("/transfer")
    public String transfer(@RequestBody TransferRequestDTO dto)
    {
        return service.transfer(dto);
    }
}