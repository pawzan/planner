package com.example.planner;



import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class AppController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DemandRepository demandRepository;

    @Autowired
    private  CalorieRepository calorieRepository;

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

        return "Pomyslne";
    }

    @PostMapping("/foodmenu/process_addMeal")
    public String processAddMeal(@RequestBody Calorie calorie){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByLogin(auth.getName());
        calorie.setUser(user);
        this.calorieRepository.save(calorie);

        return "Pomyslne";

    }

    @RequestMapping("/login")
    public String login() {
        return "login";
    }


    @GetMapping("/foodmenu")
    public String viewFoodMenuPage(){
        return "foodmenu";
    }

    @GetMapping("/measurement")
    public String viewMeasuermentPage(Model model){
        model.addAttribute("demand", new Demand());

        return "measurement";
    }
}
