package com.bank.cbs.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Document {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long docId;

    private String docType; // AADHAAR / PAN
    private String fileName;
    private String filePath;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;
}