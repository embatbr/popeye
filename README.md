# Popeye

Pipeline for crypto market information gathering and consolidation.

## General idea

General points (not yet too developed) to create a roadmap in the future.

- Write "gatherers" to acquire data from cryptocurrency exchanges (and other possible sources):
    - Get data actively (e.g., REST API) or passively (e.g., Websocket);
    - Store the data on a buffer (?);
    - Send to a queue (e.g., Kafka).
- Design a cleansing process:
    - Apply sorting to gathered data (there's no guarantee the queue has the data sorted);
    - Normalize;
    - Remove or add fields, as well as complete missing fields;
    - Convert all data to numeric values?
- Feature engineering:
    - Remove unnecessary fields;
    - Add fields (or derivate from existing ones);
    - Combine several fields into one.
- Learning:
    - Learn patterns from currency's trade history;
    - Associate with news, FUD and announcements:
        - This step requires subjective textual information to be collected and quantified.

## TODO

- Study the following API documentations:
    - [Binance](https://github.com/binance-exchange/binance-official-api-docs)
    - [Kucoin](https://kucoinapidocs.docs.apiary.io/#)
