import React, {useState} from 'react';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import * as styles from "./styles";

const CELL_COUNT = 4;


const SigninPageLarge =
    ({
         formattedPhone,
         testPhone,
         codeCheck,
         alert,
         expired,
         error,
         isFetching,
         showCodeScreen,
         onBack,
         onSubmit
     }) => {

        const [value, setValue] = useState('');
        const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
        const [props, getCellOnLayoutHandler] = useClearByFocusCell({
            value,
            setValue,
        });

    return (
            <styles.Wrapper>
                <styles.Blocks>

                    {showCodeScreen ?
                        expired ?
                            <styles.Block>
                                <styles.Comment yellow>
                                    Код просрочен. Запросите новый.
                              </styles.Comment>
                                <styles.Button
                                    onPress={onSubmit}
                                >
                                    <styles.ButtonText>
                                        Выслать новый код
                                    </styles.ButtonText>
                                </styles.Button>
                            </styles.Block>
                        :
                        <styles.Block>

                            <styles.InputLine>
                                <styles.SubTitle>
                                    Введите проверочный код:
                                </styles.SubTitle>
                            </styles.InputLine>
                            <CodeField
                                ref={ref}
                                {...props}
                                value={value}
                                onChangeText={e => {
                                    setValue(e);
                                    if(value && value.length===CELL_COUNT){
                                        codeCheck(value);
                                    }
                                }}
                                autoFocus={true}
                                codeLength={4}
                                cellCount={CELL_COUNT}
                                rootStyle={{marginTop: 20}}
                                onBlur={() => {
                                    if(value && value.length===CELL_COUNT){
                                        setValue();
                                        codeCheck(value);
                                    }
                                }}
                                keyboardType="number-pad"
                                textContentType="oneTimeCode"
                                renderCell={({index, symbol, isFocused}) => (
                                    <styles.CodeInput
                                        key={index}
                                        isFocused={isFocused}
                                        disabled={isFetching}
                                        onLayout={getCellOnLayoutHandler(index)}>
                                        {isFetching && `•`}
                                        {symbol || (isFocused ? <Cursor/> : null)}
                                    </styles.CodeInput>
                                )}
                            />

                            {error &&
                            <styles.Comment yellow>
                                Не верный код подтверждения. Попробуйте еще раз.
                            </styles.Comment>
                            }


                            <styles.Comment>
                                Проверочный код прийдет вам в СМС на {'\n'}
                                телефон {formattedPhone} в течении 2 минут.
                            </styles.Comment>

                            <styles.Comment margintop>
                                Если вы ошиблись при вводе{'\n'}
                                номера телефона, нажмите:
                            </styles.Comment>
                            <styles.Button
                                onPress={onBack}
                            >
                                <styles.ButtonText>
                                    изменить номер
                                </styles.ButtonText>
                            </styles.Button>

                        </styles.Block>
                        :
                        <styles.Block>

                            <styles.InputLine>
                                <styles.SubTitle>
                                    Для входа введите номер телефона:
                                </styles.SubTitle>
                            </styles.InputLine>

                            <styles.Input
                                value={formattedPhone}
                                placeholder={`+7 (___) ___-__-__`}
                                keyboardType = "number-pad"
                                placeholderTextColor = "#4E9BA7"
                                autoFocus={true}
                                maxLength={16}
                                onChangeText={e => {
                                    testPhone(e);
                                }}
                            />

                            <styles.Button
                                onPress={onSubmit}
                                keyboardShouldPersistTaps='always'
                                disabled={alert}
                            >
                                <styles.ButtonText>
                                    Далее
                                </styles.ButtonText>
                            </styles.Button>
                            <styles.Comment>
                                мы пришлем смс с кодом{'\n'}
                                подтверждения на этот номер
                            </styles.Comment>

                        </styles.Block>
                    }
                </styles.Blocks>
            </styles.Wrapper>
        );
    }

export default SigninPageLarge;
