package com.example.security.controllers;

import com.example.security.dto.UserDto;
import com.example.security.services.RoleService;
import com.example.security.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private UserService userService;
    @Autowired
    private RoleService roleService;

    @GetMapping
    public String admin(Model model, Principal principal) {
        model.addAttribute("authUser", userService.findByEmail(principal.getName()));
        model.addAttribute("roles", roleService.findAll());
        return "/admin/main_menu";
    }

    @ResponseBody
    @GetMapping("/users")
    public List<UserDto> list() {
        return userService.findAll()
                .stream()
                .map(u -> userService.convertToUserDto(u))
                .collect(Collectors.toList());
    }

    @ResponseBody
    @GetMapping("/users/{id}")
    public UserDto userById(@PathVariable int id) {
        return userService.convertToUserDto(userService.findById(id));
    }

    @ResponseBody
    @PostMapping("/users")
    public ResponseEntity<HttpStatus> create(@RequestBody UserDto userDto) {
        userService.save(userService.convertToUser(userDto));
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @ResponseBody
    @PutMapping("/users")
    public ResponseEntity<HttpStatus> edit(@RequestBody UserDto userDto) {
        userService.save(userService.convertToUser(userDto));
        return ResponseEntity.ok(HttpStatus.OK);
    }


    @ResponseBody
    @DeleteMapping("/users/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable int id) {
        userService.deleteById(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
