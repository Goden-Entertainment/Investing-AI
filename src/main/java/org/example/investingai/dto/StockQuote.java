package org.example.investingai.dto;


import com.fasterxml.jackson.annotation.JsonProperty;

public class StockQuote {

    @JsonProperty("c")
    private Double currentPrice;   // nuværende pris

    @JsonProperty("d")
    private Double change;         // ændring i kr

    @JsonProperty("dp")
    private Double changePercent;  // ændring i %

    @JsonProperty("h")
    private Double high;           // dagens højeste

    @JsonProperty("l")
    private Double low;            // dagens laveste

    @JsonProperty("o")
    private Double open;           // åbningspris

    @JsonProperty("pc")
    private Double previousClose;  // gårsdagens lukkepris

    public Double getCurrentPrice() {
        return currentPrice;
    }

    public void setCurrentPrice(Double currentPrice) {
        this.currentPrice = currentPrice;
    }

    public Double getChange() {
        return change;
    }

    public void setChange(Double change) {
        this.change = change;
    }

    public Double getChangePercent() {
        return changePercent;
    }

    public void setChangePercent(Double changePercent) {
        this.changePercent = changePercent;
    }

    public Double getHigh() {
        return high;
    }

    public void setHigh(Double high) {
        this.high = high;
    }

    public Double getLow() {
        return low;
    }

    public void setLow(Double low) {
        this.low = low;
    }

    public Double getOpen() {
        return open;
    }

    public void setOpen(Double open) {
        this.open = open;
    }

    public Double getPreviousClose() {
        return previousClose;
    }

    public void setPreviousClose(Double previousClose) {
        this.previousClose = previousClose;
    }
}