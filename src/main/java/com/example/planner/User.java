package com.example.planner;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import lombok.*;
import org.springframework.lang.NonNull;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false,unique = true,length = 255)
    private String login;

    @Column(nullable = false,length = 255)
    private String password;

    @Column(nullable = false,unique = true,length = 255)
    private String email;

}
