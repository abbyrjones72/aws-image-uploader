package com.abbycodes.aws_image_upload.datastore;

import com.abbycodes.aws_image_upload.profile.UserProfile;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class FakeUserProfileDataStore {

    private static final List<UserProfile> USER_PROFILES = new ArrayList<>();

    static {
        USER_PROFILES.add(new UserProfile(UUID.fromString("0dbe1eac-e583-4dc3-9568-993102350d7f"), "Janet Jones", null));
        USER_PROFILES.add(new UserProfile(UUID.fromString("1a207b11-3bec-4d50-8fcb-ba13858b099b"), "Abby Jones", null));
    }

    public List<UserProfile> getUserProfiles() {
        return USER_PROFILES;
    }
}
