package com.hyeondeok.back_end.Dto;

import com.hyeondeok.back_end.Entity.Post;
import lombok.Data;

@Data
public class PostDto {
    private Long postId;
    private String username;
    private String content;
    private String date;

    public Post toEntity() {
        Post post = new Post();
        post.setUsername(this.username);
        post.setContent(this.content);

        return post;
    }
}