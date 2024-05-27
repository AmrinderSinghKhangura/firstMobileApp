import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
    GestureHandlerRootView,
    ScrollView,
} from "react-native-gesture-handler";

const FlexBox = () => {
    return (
        <GestureHandlerRootView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.t1}>
                        In the dense, ancient jungles of Ankarath, there exists
                        a legend whispered among the tribal elders and feared by
                        all who dare venture deep into the forest. This is the
                        tale of the Souleye, a mysterious and enigmatic monkey
                        said to possess the ability to peer into the very
                        essence of a person's soul. The Legend of the Souleye
                        Origins Centuries ago, when the world was young and
                        magic flowed freely through the veins of the earth, the
                        gods decided to create a guardian for the jungles of
                        Ankarath. They chose a monkey, a creature known for its
                        curiosity and agility, and bestowed upon it an
                        extraordinary gift—the ability to see into the hearts
                        and souls of all living beings. The monkey, now known as
                        the Souleye, became the protector of the jungle,
                        ensuring that no evil could flourish within its verdant
                        depths. It was said that the Souleye could look into a
                        person's eyes and see their true nature, their deepest
                        fears, desires, and sins. Those with pure hearts were
                        blessed, while those with darkness within were driven to
                        madness by the reflection of their own
                        malevolence.Appearance The Souleye appears as a small,
                        unassuming monkey with soft, silvery fur that shimmers
                        faintly in the moonlight. Its most striking feature,
                        however, is its eyes. Large and luminescent, they glow
                        with an otherworldly light that seems to pierce through
                        the very fabric of reality. These eyes are mirrors to
                        the soul, reflecting the innermost truths of those who
                        meet its gaze. Abilities The Souleye's powers are
                        manifold: Soulgaze: By locking eyes with a person, the
                        Souleye can delve into their soul, revealing their true
                        self. This ability can bring great clarity or utter
                        despair, depending on what lies within. Truthspeaker:
                        The Souleye can communicate telepathically, sharing the
                        truths it discovers. It speaks in riddles and metaphors,
                        making its revelations both profound and puzzling.
                        Guardian's Blessing: Those deemed worthy by the Souleye
                        receive its blessing, a mark that grants protection and
                        guidance through the jungle. Madness Inducer: Those with
                        corrupted souls who meet the Souleye's gaze are driven
                        mad, haunted by visions of their own evil and guilt.
                        Role in the Jungle The Souleye is both a guardian and a
                        judge. It maintains the balance of the jungle, ensuring
                        that harmony prevails. The tribes of Ankarath hold the
                        Souleye in reverence, offering it tributes and seeking
                        its counsel in times of need. Hunters and travelers
                        tread carefully, knowing that an encounter with the
                        Souleye could change their fate forever. Stories and
                        Encounters Many stories circulate about the Souleye: The
                        Tale of the Lost Hunter: A hunter, lost and desperate,
                        stumbled upon the Souleye. Upon meeting its gaze, he saw
                        his selfishness and greed laid bare. Stricken with
                        remorse, he vowed to live a life of generosity and was
                        guided safely out of the jungle. The Cursed Raider: A
                        notorious raider, seeking to plunder the riches of
                        Ankarath, met the Souleye and was driven mad by the
                        vision of his own cruelty. He wandered the jungle,
                        muttering to himself, a living warning to those who
                        would harm the forest. Conclusion The Souleye remains
                        one of Ankarath's greatest mysteries, a being of
                        profound power and wisdom. It embodies the duality of
                        protection and judgment, reflecting the light and
                        darkness within all beings. To encounter the Souleye is
                        to face oneself, and in that moment of soul-baring
                        clarity, one either finds redemption or descends into
                        madness.
                    </Text>
                    <Text style={styles.t2}>FlexBox</Text>
                    <Text style={styles.t3}>FlexBox</Text>
                </View>
            </ScrollView>
        </GestureHandlerRootView>
    );
};

export default FlexBox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow",
    },
    t1: {
        flex: 5,
        backgroundColor: "red",
    },
    t2: {
        flex: 2,
        backgroundColor: "blue",
        height: 100,
    },
    t3: {
        flex: 3,
        backgroundColor: "green",
        height: 100,
    },
});
