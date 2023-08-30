package com.cagatayusta.fullstacktodo.ItemController;

import com.cagatayusta.fullstacktodo.ItemRepository;
import com.cagatayusta.fullstacktodo.item.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping(path="/todo")
public class ItemController {
    @Autowired
    private ItemRepository itemRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewItem (@RequestParam String title, @RequestParam Boolean status) {
        Item t = new Item();
        t.setTitle(title);
        t.setStatus(status);
        itemRepository.save(t);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Item> getAllItems() {
        return itemRepository.findAll();
    }


}
