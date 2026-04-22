package org.example.investingai.service;


import org.example.investingai.dto.StockQuote;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.slf4j.Logger;
import org.springframework.web.reactive.function.client.WebClientException;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class FinnhubService {

    @Value("${app.finn-key}")
    private String FINN_KEY;

    private final WebClient webClient;
    //Nødvendig for fejlhåndtering da den gemmer hvad der er sket i programmet.
    public static final Logger logger = LoggerFactory.getLogger(FinnhubService.class);

//    public FinnhubService(){this.webClient=WebClient.create();}

    public FinnhubService(WebClient.Builder builder) {
        this.webClient = builder
                .baseUrl("https://finnhub.io/api/v1")
                .build();
    }

    public StockQuote stockQuote(String stock) {
        System.out.println("FINN_KEY værdi: " + FINN_KEY);
        try {
            return webClient.get()
                    .uri(uriBuilder -> uriBuilder
                            .path("/quote")
                            .queryParam("symbol", stock)
                            .queryParam("token", FINN_KEY)
                            .build())
                    .retrieve()
                    .bodyToMono(StockQuote.class)
                    .block();
        } catch (WebClientResponseException e) {
            logger.error("Finnhub Error for " + stock + " : " + e.getStatusCode());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "could not fetch data");
        }
    }

    public String getMarketContext(List<String> stock){
        StringBuilder context = new StringBuilder("Actual market data: \n");
        for (String stockInfo: stock){
            try {
                StockQuote quote = stockQuote(stockInfo);
                context.append(stockInfo)
                        .append(": price $").append(quote.getCurrentPrice())
                        .append(", Change: ").append(quote.getChangePercent()).append("%")
                        .append(" High: $").append(quote.getHigh())
                        .append(", Low: $").append(quote.getLow())
                        .append("\n");
            }catch (Exception e){
                logger.warn("Could not fetch data " + stockInfo);
            }
        }
        return context.toString();
    }
}
