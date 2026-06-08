package com.bank.cbs.service;

import com.bank.cbs.entity.Account;
import com.bank.cbs.entity.Customer;
import com.bank.cbs.repository.AccountRepository;
import com.bank.cbs.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepo;

    @Autowired
    private CustomerRepository customerRepo;

    public Account createAccount(Long customerId, String accountType) {

        Customer customer = customerRepo.findById(customerId).orElseThrow();

        // 🚨 KYC CHECK
        if (!"VERIFIED".equals(customer.getStatus())) {
            throw new RuntimeException("KYC not completed. Cannot create account.");
        }

        Account account = new Account();
        account.setCustomer(customer);
        account.setAccountType(accountType);
        account.setBalance(0.0);
        account.setStatus("ACTIVE");

        // Generate account number
        account.setAccountNumber(generateAccountNumber());

        return accountRepo.save(account);
    }

    private String generateAccountNumber() {
        Random random = new Random();
        return "ACC" + (10000000 + random.nextInt(90000000));
    }

    public Account getAccount(Long id) {
        return accountRepo.findById(id).orElseThrow();
    }

    public Double getBalance(Long accountId) {

        Account account = accountRepo.findById(accountId).orElseThrow();

        return account.getBalance();
    }
}