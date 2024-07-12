package com.banquito.core.clientdoc.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.banquito.core.clientdoc.dto.SegmentDTO;
import com.banquito.core.clientdoc.model.Segment;
import com.banquito.core.clientdoc.repository.SegmentRepository;
import com.banquito.core.clientdoc.util.mapper.SegmentMapper;

@Service
public class SegmentService {

    private final SegmentRepository segmentRepository;
    private final SegmentMapper mapper;
    public SegmentService(SegmentRepository segmentRepository, SegmentMapper segmentMapper) {
        this.segmentRepository = segmentRepository;
        this.mapper = mapper;
    }

    public List<SegmentDTO> obtainAllSegments() {
        Log.info("Va a retornar todos los segmentos")
        List<Segment> segments = this.segmentRepository.findAll();
        return segments.stream().map(s -> this.mapper.toDTO(s)).collect(Collectors.toList());
    }
}