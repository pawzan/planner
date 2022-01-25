package com.example.planner;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@Controller
public class AppController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DemandRepository demandRepository;

    @Autowired
    private  CalorieRepository calorieRepository;

    @Autowired
    private CalorieService service;

    @GetMapping("/register")
    public String signUpForm(Model model) {
        model.addAttribute("user", new User());

        return "register_form";
    }

    @PostMapping("/process_register")
    public String processRegister( User user) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        userRepository.save(user);
        return "register_success";
    }

    @PatchMapping("/measurement/process_addCalories")
    public String processAddCalories(@RequestBody Demand demand) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByLogin(auth.getName());
        demand.setUser(user);
        this.demandRepository.save(demand);

        return "measurement";
    }




//    @PostMapping("/process_addMeal")
//    public String processAddMeal(@RequestBody Calorie calorie){
//        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//        User user = userRepository.findByLogin(auth.getName());
//        calorie.setUser(user);
//        this.calorieRepository.save(calorie);
//
//        return "foodmenu";
//
//    }

    LocalDate localDate = LocalDate.now();

    @PostMapping("/process_addMeal")
    public String processAddMeal(@RequestBody Calorie calorie){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByLogin(auth.getName());
        calorie.setUser(user);
        this.calorieRepository.save(calorie);

        return "redirect:/foodmenu?dates=" + localDate;

    }

    @RequestMapping("/login")
    public String login() {
        return "login";
    }


    @GetMapping("/foodmenu")
    public String viewFoodMenuPage(Model model, @Param("keyword") String keyword, @Param("keyword1") String dates)
    {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByLogin(auth.getName());
//        model.addAttribute("getCalorie", calorieRepository.findAllByUser(user));
        List<Calorie> listCalorie2 = calorieRepository.listAllDate(dates,user);
        model.addAttribute("listCalorie2", listCalorie2);
        model.addAttribute("dates", dates);
        List<Calorie> listCalorie = calorieRepository.listAll(keyword);
        model.addAttribute("listCalorie", listCalorie);
        model.addAttribute("keyword", keyword);

        return "foodmenu";
    }

    @GetMapping("/measurement")
    public String viewMeasuermentPage(Model model){
        model.addAttribute("demand", new Demand());
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByLogin(auth.getName());
        List<Demand> listDemand = demandRepository.listAllDemand(user);
        model.addAttribute("getDemand", listDemand);

        return "measurement";
    }

    @RequestMapping("/delete/{id_posilku}")
    public String deleteProduct(@PathVariable(name = "id_posilku") int id_posilku) {
        service.delete(id_posilku);
        return "redirect:/foodmenu?dates=" + localDate;
    }


}
