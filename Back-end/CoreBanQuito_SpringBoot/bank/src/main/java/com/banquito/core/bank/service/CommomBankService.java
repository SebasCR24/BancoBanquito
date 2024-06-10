package com.banquito.core.bank.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.banquito.core.bank.model.Bank;
import com.banquito.core.bank.repository.BankRepository;
import com.banquito.core.bank.repository.ChannelRepository;
import com.banquito.core.bank.repository.RoleRepository;

@Service
public class CommomBankService {
    private final BankRepository bankRepository;
    private final RoleRepository roleRepository;
    private final ChannelRepository channelRepository;

    

    public CommomBankService(BankRepository bankRepository, RoleRepository roleRepository,
            ChannelRepository channelRepository) {
        this.bankRepository = bankRepository;
        this.roleRepository = roleRepository;
        this.channelRepository = channelRepository;
    }



    public Bank obtainBankDefault(){
        List<Bank> banks = this.bankRepository.findAll();
        if (!banks.isEmpty()){
            return banks.getFirst();
        }else{
            throw new RuntimeException("No se ha encontrado ningún banco")
        }
    }
}
