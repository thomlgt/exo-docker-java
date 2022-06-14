package fr.semifir.dockerbackend;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
@CrossOrigin
public class BaseController {

    @GetMapping("hello")
    public BaseMessage hello() {
        return new BaseMessage("Hello la team !");
    }
}
