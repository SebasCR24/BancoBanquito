package com.banquito.core.clientdoc.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.banquito.core.clientdoc.dto.SegmentDTO;
import com.banquito.core.clientdoc.service.SegmentService;

@RestController
@RequestMapping("/api/v1/segment")
public class SegmentController {

    private final SegmentService service;

    public SegmentController(SegmentService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<SegmentDTO>> getAllSegments() {
        return ResponseEntity.ok(this.service.obtainAllSegments());
    }

    @PostMapping
    public ResponseEntity<Void> createSegment(@RequestBody SegmentDTO dto) {
        this.service.create(dto);
        return ResponseEntity.ok().build();
    }
}
