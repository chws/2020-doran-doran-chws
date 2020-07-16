package com.grasshouse.dorandoran.comment.service;

import com.grasshouse.dorandoran.comment.domain.Comment;
import com.grasshouse.dorandoran.comment.repository.CommentRepository;
import com.grasshouse.dorandoran.comment.service.dto.CommentCreateRequest;
import com.grasshouse.dorandoran.common.exception.CommentNotFoundException;
import com.grasshouse.dorandoran.common.exception.MemberNotFoundException;
import com.grasshouse.dorandoran.common.exception.PostNotFoundException;
import com.grasshouse.dorandoran.member.domain.Member;
import com.grasshouse.dorandoran.member.repository.MemberRepository;
import com.grasshouse.dorandoran.post.domain.Post;
import com.grasshouse.dorandoran.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final MemberRepository memberRepository;
    private final PostRepository postRepository;

    @Transactional
    public Long createComment(Long postId, CommentCreateRequest commentRequest) {
        Comment comment = convertToComment(postId, commentRequest);
        commentRepository.save(comment);
        return comment.getId();
    }

    private Comment convertToComment(Long postId, CommentCreateRequest commentRequest) {
        Member member = memberRepository.findById(commentRequest.getMemberId())
            .orElseThrow(MemberNotFoundException::new);
        Post post = postRepository.findById(postId)
            .orElseThrow(PostNotFoundException::new);
        Double distance = post.getLocation()
            .calculateDistance(commentRequest.getLocation());

        return Comment.builder()
            .author(member)
            .post(post)
            .content(commentRequest.getContent())
            .distance(distance)
            .build();
    }

    @Transactional
    public void deleteComment(Long postId, Long commentId) {
        Comment comment = findCommentById(commentId);
        Post post = postRepository.findById(postId)
            .orElseThrow(PostNotFoundException::new);
        post.removeComment(comment);
        commentRepository.delete(comment);
    }

    private Comment findCommentById(Long commentId) {
        return commentRepository.findById(commentId)
            .orElseThrow(CommentNotFoundException::new);
    }
}
