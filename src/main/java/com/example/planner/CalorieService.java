package com.example.planner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CalorieService {
    @Autowired
    CalorieRepository calorieRepository;

    public List<Calorie> listAll(String keyword) {
        if (keyword != null) {
            return calorieRepository.listAll(keyword);
        }
        throw new IllegalArgumentException("");
    }

    public List<Calorie> listAll() {
        return calorieRepository.findAll();
    }
    public void delete(long id_posilku) {
        calorieRepository.deleteById(id_posilku);
    }
}
