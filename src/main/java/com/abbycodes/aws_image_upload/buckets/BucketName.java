package com.abbycodes.aws_image_upload.buckets;

public enum BucketName {

    PROFILE_IMAGE("abbycodes-image-upload-123");

    private final String bucketName;

    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getBucketName() {
        return bucketName;
    }
}
