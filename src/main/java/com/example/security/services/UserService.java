package com.example.security.services;

//import com.example.security.dto.UserDto;
import com.example.security.dto.UserDto;
import com.example.security.entities.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.List;

public interface UserService extends UserDetailsService {

    @Override
    UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;

    User findByEmail(String email);

    void save(User user);

    List<User> findAll();

    void deleteById(int id);

    User convertToUser(UserDto userDto);

    UserDto convertToUserDto(User user);

    User findById(int id);
}
