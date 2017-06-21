package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func main() {
	b, _ := json.Marshal(map[string]string{
		"query": `{
                  product(pid: "O141155") {
                    name
                    stockAvailable
                  }
                }`,
	})
	resp, err := http.Post("http://localhost:3000/graphql", "application/json", bytes.NewBuffer(b))
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()
	b, _ = ioutil.ReadAll(resp.Body)
	fmt.Println(string(b))
}
