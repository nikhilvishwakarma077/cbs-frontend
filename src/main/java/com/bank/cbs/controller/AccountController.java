package com.bank.cbs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import com.bank.cbs.dto.AccountRequestDTO;
import com.bank.cbs.entity.Account;
import com.bank.cbs.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/account")
public class AccountController {

    @Autowired
    private AccountService service;

    @PostMapping("/create")
    public Account createAccount(@RequestBody AccountRequestDTO dto) {
        return service.createAccount(dto.getCustomerId(), dto.getAccountType());
    }

    @GetMapping("/{id}")
    public Account getAccount(@PathVariable Long id) {
        return service.getAccount(id);
    }

    @GetMapping("/balance/{accountId}")
    public Double getBalance(@PathVariable Long accountId) {
        return service.getBalance(accountId);
    }
}