package com.bank.cbs.repository;

import com.bank.cbs.entity.Document;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DocumentRepository extends JpaRepository<Document, Long> {

    List<Document> findByCustomerCustomerId(Long customerId);
}