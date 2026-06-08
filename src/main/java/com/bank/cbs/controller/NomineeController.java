package com.bank.cbs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import com.bank.cbs.dto.NomineeRequestDTO;
import com.bank.cbs.entity.Nominee;
import com.bank.cbs.service.NomineeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/nominee")
public class NomineeController {

    @Autowired
    private NomineeService service;

    @PostMapping("/add")
    public Nominee addNominee(@RequestBody NomineeRequestDTO dto) {
        return service.addNominee(dto);
    }

    @GetMapping("/account/{accountId}")
    public List<Nominee> getNominees(@PathVariable Long accountId) {
        return service.getNominees(accountId);
    }
}