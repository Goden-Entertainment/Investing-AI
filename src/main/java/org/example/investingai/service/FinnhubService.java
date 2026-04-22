package org.example.investingai.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class FinnhubService {

    @Value("${app.finn-key}")
    private String FINN_KEY;

    private final WebClient client = WebClient.create();

    public String getStockQuote(String symbol){
        String url = "https://finnhub.io/api/v1/quote?symbol=" + symbol + "&token=" + FINN_KEY;

        return client.get()
                .uri(url)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

}
