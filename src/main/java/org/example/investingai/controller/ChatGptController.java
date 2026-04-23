package org.example.investingai.controller;

import org.example.investingai.dto.MyResponse;
import org.example.investingai.service.FinnhubService;
import org.example.investingai.service.OpenAiService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/investingAi")
@CrossOrigin(origins = "*")
public class ChatGptController {

    private OpenAiService openAiService;
    private FinnhubService finnhubService;

    //Mapper dem om, så ChatGPT giver Apple i chatten og ikke AAPL.
    private static final Map<String, String> STOCKS = Map.ofEntries(
            Map.entry("NVDA", "Nvidia"),
            Map.entry("MSFT", "Microsoft"),
            Map.entry("AAPL", "Apple"),
            Map.entry("GOOGL", "Google"),
            Map.entry("META", "Meta"),
            Map.entry("AMD", "AMD"),
            Map.entry("AVGO", "Broadcom"),
            Map.entry("NFLX", "Netflix"),
            Map.entry("AMZN", "Amazon"),
            Map.entry("TSLA", "Tesla"),
            Map.entry("ADBE", "Adobe"),
            Map.entry("CRM", "Salesforce"),
            Map.entry("TEAM", "Atlassian"),
            Map.entry("PLTR", "Palantir"),
            Map.entry("INTC", "Intel")
    );

    public ChatGptController(OpenAiService openAiService, FinnhubService finnhubService) {
        this.openAiService = openAiService;
        this.finnhubService = finnhubService;
    }

    @GetMapping
    public MyResponse getAdvice(@RequestParam String about) {





        // Step 1: Fetch live Finnhub data for all 15 stocks, using full company names
        StringBuilder stockInfo = new StringBuilder();
//        StringBuilder newsInfo = new StringBuilder();

        for (Map.Entry<String, String> entry : STOCKS.entrySet()) {
            String data = finnhubService.getStockQuote(entry.getKey());
            stockInfo.append(entry.getValue()).append(": ").append(data).append(" | ");

//            String news =finnhubService.getStockNews(entry.getKey());
//            newsInfo.append(entry.getKey()).append(" news: ").append(news).append(" | ");
        }


        // Step 2: Short and concise system message to save tokens
        String systemMessage = "You are a stock market assistant. " +
                "Live stock data: " + stockInfo + ". " +
//                "Recent company news: " + newsInfo + ". " +
                "c=current price, h=day high, l=day low, o=open, pc=previous close. " +
                "Analyse all stocks, recommend the BEST 2-3 options in 3-4 sentences max. " +
                "Use company names not ticker symbols. " +
                "If unrelated to investing, ask the user to ask about stocks.";

        return openAiService.makeRequest(about, systemMessage);
    }

    //BARE EN TEST MAPPING SÅ VI KAN TESTE VORES BACKEND... Yadi was here...
    @GetMapping("/hej")
    public String hej(){
        System.out.println("inde i controlleren");
        return "Hej med dig";
    }
}