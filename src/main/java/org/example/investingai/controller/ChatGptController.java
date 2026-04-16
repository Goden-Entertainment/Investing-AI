package org.example.investingai.controller;

import org.example.investingai.dto.MyResponse;
import org.example.investingai.service.OpenAiService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/investingAi")
@CrossOrigin(origins = "*")
public class ChatGptController {

    private OpenAiService service;


    final static String SYSTEM_MESSAGE = "You are a helpful assistant that only provides financial advice on investing based on." + //"FinnhubAPI"
            " The user should provide a question related to the stock market, but if the user asks a question beyond the topic," +
            " ignore the content of the question and ask the user to provide something related to investing.";

    public ChatGptController(OpenAiService service) {
        this.service = service;

    }

    @GetMapping
    public MyResponse getAdvice(@RequestParam String about) {
        return service.makeRequest(about, SYSTEM_MESSAGE);
    }

    @GetMapping("/hej")
    public String hej(){
        System.out.println("inde i controlleren");
        return "Hej med dig";

    }
}
