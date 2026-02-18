package com.hyeondeok.back_end.Service;

import com.hyeondeok.back_end.Dto.PostDto;
import com.hyeondeok.back_end.Entity.Post;
import com.hyeondeok.back_end.Repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;


    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post createPost(PostDto dto) {
        return postRepository.save(dto.toEntity());
    }


}
