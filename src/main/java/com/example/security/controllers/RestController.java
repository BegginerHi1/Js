package com.example.security.controllers;

import com.example.security.dto.UserDto;
import com.example.security.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/api/users")
public class RestController {

    private final UserService userService;

    @Autowired
    public RestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<UserDto> list() {
        return userService.findAll()
                .stream()
                .map(userService::convertToUserDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public UserDto userById(@PathVariable int id) {
        return userService.convertToUserDto(userService.findById(id));
    }

    @PostMapping
    public ResponseEntity<HttpStatus> create(@RequestBody UserDto userDto) {
        userService.save(userService.convertToUser(userDto));
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<HttpStatus> edit(@RequestBody UserDto userDto) {
        userService.save(userService.convertToUser(userDto));
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable int id) {
        userService.deleteById(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
