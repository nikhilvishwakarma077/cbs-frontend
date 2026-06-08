package com.bank.cbs.service;

import com.bank.cbs.entity.Customer;
import com.bank.cbs.entity.Document;
import com.bank.cbs.repository.CustomerRepository;
import com.bank.cbs.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
public class DocumentService {

    @Autowired
    private DocumentRepository documentRepo;

    @Autowired
    private CustomerRepository customerRepo;

    private final String uploadDir = "uploads/";

    public Document uploadDocument(Long customerId, String docType, MultipartFile file) throws IOException {

        Customer customer = customerRepo.findById(customerId)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        // Dynamic project path
        String uploadDir = System.getProperty("user.dir") + "/uploads/";

        // Create folder if not exists
        File dir = new File(uploadDir);
        if (!dir.exists()) {
            dir.mkdirs();
        }

        // Unique file name
        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        String filePath = uploadDir + fileName;

        // Save file
        file.transferTo(new File(filePath));

        // Save in DB
        Document doc = new Document();
        doc.setDocType(docType);
        doc.setFileName(fileName);
        doc.setFilePath(filePath);
        doc.setCustomer(customer);

        return documentRepo.save(doc);
    }

    public List<Document> getDocumentsByCustomer(Long customerId) {
        return documentRepo.findByCustomerCustomerId(customerId);
    }
}