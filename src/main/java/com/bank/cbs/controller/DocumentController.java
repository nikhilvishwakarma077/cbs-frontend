package com.bank.cbs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import com.bank.cbs.entity.Document;
import com.bank.cbs.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/document")
public class DocumentController {

    @Autowired
    private DocumentService service;

    @PostMapping(
            value = "/upload",
            consumes = "multipart/form-data"
    )

    public Document uploadDocument(
            @RequestParam Long customerId,
            @RequestParam String docType,
            @RequestParam MultipartFile file
    ) throws IOException {

        return service.uploadDocument(customerId, docType, file);
    }

    @GetMapping("/customer/{customerId}")
    public List<Document> getDocs(@PathVariable Long customerId) {
        return service.getDocumentsByCustomer(customerId);
    }
}