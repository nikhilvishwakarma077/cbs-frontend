package com.bank.cbs.service;

import com.bank.cbs.entity.Customer;
import com.bank.cbs.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class KycService {

    @Autowired
    private CustomerRepository customerRepo;

    private final String PYTHON_KYC_URL = "http://localhost:5000/kyc"; // change later with ngrok

    public String verifyKyc(Long customerId) {

        Customer customer = customerRepo.findById(customerId).orElseThrow();

        // Dummy call (for now)
        // Later replace with actual Python API call

        boolean isVerified = true; // simulate response

        if (isVerified) {
            customer.setStatus("VERIFIED");
            customerRepo.save(customer);
            return "KYC VERIFIED";
        } else {
            customer.setStatus("REJECTED");
            customerRepo.save(customer);
            return "KYC REJECTED";
        }
    }
}

//
//package com.bank.cbs.service;
//
//import com.bank.cbs.entity.Customer;
//import com.bank.cbs.entity.Document;
//import com.bank.cbs.repository.CustomerRepository;
//import com.bank.cbs.repository.DocumentRepository;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.core.io.FileSystemResource;
//import org.springframework.http.*;
//        import org.springframework.stereotype.Service;
//import org.springframework.util.LinkedMultiValueMap;
//import org.springframework.util.MultiValueMap;
//import org.springframework.web.client.RestTemplate;
//
//import java.util.List;
//import java.util.Map;
//
//@Service
//public class KycService {
//
//    @Autowired
//    private CustomerRepository customerRepo;
//
//    @Autowired
//    private DocumentRepository documentRepo;
//
//    // Python API URL
//    private final String PYTHON_KYC_URL =
//            "http://localhost:5000/verify-document";
//
//    public String verifyKyc(Long customerId) {
//
//        // Fetch customer
//        Customer customer =
//                customerRepo.findById(customerId).orElseThrow();
//
//        // Fetch uploaded documents
//        List<Document> documents =
//                documentRepo.findByCustomerCustomerId(customerId);
//
//        // Check if documents exist
//        if (documents.isEmpty()) {
//            throw new RuntimeException("No documents uploaded");
//        }
//
//        RestTemplate restTemplate = new RestTemplate();
//
//        String finalStatus = "VERIFIED";
//
//        // Send each document to Python
//        for (Document document : documents) {
//
//            // Read uploaded file
//            FileSystemResource fileResource =
//                    new FileSystemResource(document.getFilePath());
//
//            // Create multipart request body
//            MultiValueMap<String, Object> body =
//                    new LinkedMultiValueMap<>();
//
//            body.add("file", fileResource);
//            body.add("docType", document.getDocType());
//
//            // Set headers
//            HttpHeaders headers = new HttpHeaders();
//            headers.setContentType(MediaType.MULTIPART_FORM_DATA);
//
//            HttpEntity<MultiValueMap<String, Object>> requestEntity =
//                    new HttpEntity<>(body, headers);
//
//            // Call Python API
//            ResponseEntity<Map> response =
//                    restTemplate.postForEntity(
//                            PYTHON_KYC_URL,
//                            requestEntity,
//                            Map.class
//                    );
//
//            // Get status from Python response
//            String status =
//                    response.getBody().get("status").toString();
//
//            // If any document rejected
//            if (!status.equalsIgnoreCase("VERIFIED")) {
//                finalStatus = "REJECTED";
//                break;
//            }
//        }
//
//        // Update customer status
//        customer.setStatus(finalStatus);
//
//        customerRepo.save(customer);
//
//        return "KYC " + finalStatus;
//    }
//}