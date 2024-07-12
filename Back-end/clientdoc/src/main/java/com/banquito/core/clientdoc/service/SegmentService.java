package com.banquito.core.clientdoc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.banquito.core.clientdoc.dto.SegmentDTO;
import com.banquito.core.clientdoc.model.Segment;
import com.banquito.core.clientdoc.repository.SegmentRepository;

@Service
public class SegmentService {

    private final SegmentRepository segmentRepository;
    
    public SegmentService(SegmentRepository segmentRepository) {
        this.segmentRepository = segmentRepository;
    }
    
    public List<SegmentDTO> obtainAllSegments() {
        List<Segment> segments = this.segmentRepository.findAll();
    }
}