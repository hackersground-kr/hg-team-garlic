package com.goodfarm.domain.auth.dto.request;

public record LoginRequest(
        String username,
        String password
) {
}
