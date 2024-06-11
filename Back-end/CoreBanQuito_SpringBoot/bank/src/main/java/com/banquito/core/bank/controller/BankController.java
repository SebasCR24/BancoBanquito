package com.banquito.core.bank.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.banquito.core.bank.model.Bank;
import com.banquito.core.bank.service.CommomBankService;

@RestController
public class BankController {

    private CommomBankService service;

    public BankController(CommomBankService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<Bank> findBank() {
        try {
            return ResponseEntity.ok(this.service.obtainBankDefault());
        } catch (RuntimeException rte) {
            return ResponseEntity.notFound().build();
        }
    }
}
