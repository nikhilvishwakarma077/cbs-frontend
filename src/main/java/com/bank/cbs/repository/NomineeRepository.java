package com.bank.cbs.repository;

import com.bank.cbs.entity.Nominee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NomineeRepository extends JpaRepository<Nominee, Long> {

    List<Nominee> findByAccountAccountId(Long accountId);
}