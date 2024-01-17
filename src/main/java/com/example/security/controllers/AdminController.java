package com.example.security.controllers;

import com.example.security.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;


@Controller
@RequestMapping("/admin")
public class AdminController {

    private final UserService userService;

    @Autowired
    public AdminController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public String admin(Model model, Principal principal) {
        model.addAttribute("authUser", userService.findByEmail(principal.getName()));
        return "/admin/main_menu";
    }
}
