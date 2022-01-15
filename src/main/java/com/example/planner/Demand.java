package com.example.planner;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "zapotrzebowanie")
public class Demand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int zapotrzebowanie_id;
    private String zapotrzebowanie;
    private String bialko;
    private String tluszcze;
    private String weglowodany;


    @OneToOne
    @JoinColumn(name = "zapotrzebowanie_id_uzytkownika", referencedColumnName = "id")
    private User user;

    public User getUser() {
        return user;
    }
}
