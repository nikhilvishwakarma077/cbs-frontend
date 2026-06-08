package com.bank.cbs.service;

import com.bank.cbs.dto.CustomerRequestDTO;
import com.bank.cbs.entity.Customer;
import com.bank.cbs.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository repository;

    public Customer createCustomer(CustomerRequestDTO dto) {

        Customer customer = new Customer();

        customer.setFirstName(dto.getFirstName());
        customer.setLastName(dto.getLastName());
        customer.setMobile(dto.getMobile());
        customer.setEmail(dto.getEmail());

        customer.setDateOfBirth(dto.getDateOfBirth());
        customer.setGender(dto.getGender());

        customer.setAddress(dto.getAddress());
        customer.setCity(dto.getCity());
        customer.setState(dto.getState());
        customer.setPincode(dto.getPincode());

        customer.setPanNumber(dto.getPanNumber());
        customer.setAadhaarNumber(dto.getAadhaarNumber());

        customer.setStatus("PENDING"); // KYC not done yet

        return repository.save(customer);
    }

    public Customer getCustomerById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public List<Customer> getAllCustomers() {
        return repository.findAll();
    }
}