package com.banquito.core.clientdoc.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.banquito.core.clientdoc.model.Client;

public interface ClientRepository extends MongoRepository<Client, String>{

    
    Client findByIdentificationTypeAndIdentification(String identificationType, String identification);
    
    Client findFirstByEmail(String email);

    List<Client> findByLastNameLikeOrderByLastNameAndFirstName(String lastName);
    
}
