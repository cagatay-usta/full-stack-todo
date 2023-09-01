package com.cagatayusta.fullstacktodo.item;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping(path="/api/v1")
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

    @PutMapping(path="/put/{id}")
        public @ResponseBody String updateItem (
                @PathVariable(value="id") Long id, @RequestParam String title, @RequestParam Boolean status){
            Item updatedItem = itemRepository.findById(id).orElseThrow( () ->
                    new EntityNotFoundException(String.valueOf(id))
            );
            updatedItem.setTitle(title);
            updatedItem.setStatus(status);
            itemRepository.save(updatedItem);
            return "Updated";
        }

    @DeleteMapping(path="/delete/{id}")
        public @ResponseBody String deleteItem (@PathVariable(value="id") Long id) {
            itemRepository.deleteById(id);
            return "Deleted";
        }


}
