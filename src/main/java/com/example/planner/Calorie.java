package com.example.planner;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "posilki")
public class Calorie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_posilku;


    ///TO DO naprawid unkonw column 'kalorie_posilku' in 'field_list'
    private String nazwa;
    private String kalorie_posilku;
    private String kaloriena100;
    private String bialko_posilku;
    private String tluszcze_posilku;
    private String wegle_posilku;
    private String data_dodania;


    @OneToOne
    @JoinColumn(name = "posilki_id_uzytkownika", referencedColumnName = "id")
    private User user;

    public User getUser() {
        return user;
    }
}
