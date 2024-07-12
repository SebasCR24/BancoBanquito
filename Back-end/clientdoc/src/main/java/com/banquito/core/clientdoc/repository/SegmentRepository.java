package com.banquito.core.clientdoc.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.banquito.core.clientdoc.model.Segment;

public interface SegmentRepository extends MongoRepository<Segment, String>{

    List<Segment> findByClientTypeOrderByName(String clientType);

    Segment findFirstByCode(String code);

    

}
