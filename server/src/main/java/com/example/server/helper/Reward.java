package com.example.server.helper;

public class Reward {
    private int currencyReward;
    private int trophyReward;

    public Reward(int currencyReward, int trophyReward) {
        this.currencyReward = currencyReward;
        this.trophyReward = trophyReward;
    }

    public int getCurrencyReward() {
        return currencyReward;
    }

    public void setCurrencyReward(int currencyReward) {
        this.currencyReward = currencyReward;
    }

    public int getTrophyReward() {
        return trophyReward;
    }

    public void setTrophyReward(int trophyReward) {
        this.trophyReward = trophyReward;
    }

}
