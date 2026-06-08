package com.bank.cbs.service;

import com.bank.cbs.dto.NomineeRequestDTO;
import com.bank.cbs.entity.Account;
import com.bank.cbs.entity.Nominee;
import com.bank.cbs.repository.AccountRepository;
import com.bank.cbs.repository.NomineeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NomineeService {

    @Autowired
    private NomineeRepository nomineeRepo;

    @Autowired
    private AccountRepository accountRepo;

    public Nominee addNominee(NomineeRequestDTO dto) {

        Account account = accountRepo.findById(dto.getAccountId()).orElseThrow();

        Nominee nominee = new Nominee();

        nominee.setFirstName(dto.getFirstName());
        nominee.setLastName(dto.getLastName());

        nominee.setRelation(dto.getRelation());
        nominee.setMobile(dto.getMobile());

        nominee.setAge(dto.getAge());
        nominee.setSharePercentage(dto.getSharePercentage());

        nominee.setAccount(account);

        return nomineeRepo.save(nominee);
    }

    public List<Nominee> getNominees(Long accountId) {
        return nomineeRepo.findByAccountAccountId(accountId);
    }
}