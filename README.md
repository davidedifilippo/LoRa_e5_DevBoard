## LoRa_e5_DevBoard

Seed studio LoRa-e5 DevBoard working test with TTN and NodeRed 

I have a LoRa Gateway near home, 2 kilometers away. My end device join to LoRaWAN in a little effort. A string message containing temperature is sent to ttn server. In the uplink part a decoder catch temperature data and mark her with temperature label e.g.:

temperature: 24 

In NodeRed application the payload is sent to a dashbord gauge and showed in a browser

todo : add pressure field and decode the payload with space separated data with a label per field:

temperature: 24
pressure: 78






