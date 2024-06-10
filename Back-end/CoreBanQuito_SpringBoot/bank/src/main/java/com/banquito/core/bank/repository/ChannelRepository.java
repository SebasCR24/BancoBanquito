package com.banquito.core.bank.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.banquito.core.bank.model.Channel;

public interface ChannelRepository extends JpaRepository <Channel, String> {

}
