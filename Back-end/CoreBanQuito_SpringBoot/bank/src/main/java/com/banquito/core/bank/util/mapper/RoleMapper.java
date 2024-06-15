package com.banquito.core.bank.util.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.mapstruct.MappingTarget;
import org.mapstruct.ReportingPolicy;

import com.banquito.core.bank.controller.dto.RoleDTO;
import com.banquito.core.bank.model.Role;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface RoleMapper {

    RoleDTO toDTO(Role role);

    Role toPersistence(RoleDTO dto);
}
