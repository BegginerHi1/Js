package com.example.security.controllers;

import com.example.security.dto.UserDto;
import com.example.security.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public String user(Model model, Principal principal) {
        model.addAttribute("user", userService.findByEmail(principal.getName()));
        return "/user/user_page";
    }

    @ResponseBody
    @GetMapping("/{id}")
    public UserDto userById(@PathVariable int id) {
        return userService.convertToUserDto(userService.findById(id));
    }

}
