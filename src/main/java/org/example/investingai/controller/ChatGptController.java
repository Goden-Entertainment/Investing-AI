package org.example.investingai.controller;

import lombok.Builder;
import org.example.investingai.dto.MyResponse;
import org.example.investingai.service.FinnhubService;
import org.example.investingai.service.OpenAiService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.antlr.v4.runtime.CommonTokenFactory.DEFAULT;


@RestController
@RequestMapping("/api/v1/investingAi")
@CrossOrigin(origins = "*")
public class ChatGptController {

    private OpenAiService service;
    private FinnhubService finnhubService;


    private static final List<String> DEFAULT_STOCKS =
            List.of("NVDA", "MSFT", "AAPL", "GOOGL", "META",
                    "YHOO", "AVGO", "NFLX", "AMZN", "TSLA",
                    "ADBE", "GOOG", "TEAM", "PLTR", "INTC");

    public ChatGptController(OpenAiService service, FinnhubService finnhubService) {
        this.service = service;
        this.finnhubService = finnhubService;

    }

    @GetMapping
    public MyResponse getAdvice(@RequestParam String about) {

        String marketData = finnhubService.getMarketContext(DEFAULT_STOCKS);

        String SYSTEM_MESSAGE = "You are a helpful assistant that only provides financial advice on investing based on." +
                " The user should provide a question related to the stock market, but if the user asks a question beyond the topic," +
                " ignore the content of the question and ask the user to provide something related to investing." +
                "Brug følgende aktuelle markedsdata i dine svar:\n\n" +
                marketData;

        return service.makeRequest(about, SYSTEM_MESSAGE);
    }

    @GetMapping("/hej")
    public String hej() {
        System.out.println("inde i controlleren");
        return "Hej med dig";

    }
}
