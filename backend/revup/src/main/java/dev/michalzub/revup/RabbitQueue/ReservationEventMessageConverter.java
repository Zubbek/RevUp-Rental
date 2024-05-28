package dev.michalzub.revup.RabbitQueue;

import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.MessageProperties;
import org.springframework.amqp.support.converter.AbstractMessageConverter;
import org.springframework.amqp.support.converter.MessageConversionException;

import java.io.*;

public class ReservationEventMessageConverter extends AbstractMessageConverter {
  @Override
  protected Message createMessage(Object object, MessageProperties messageProperties) {
    try {
      ByteArrayOutputStream bos = new ByteArrayOutputStream();
      ObjectOutputStream oos = new ObjectOutputStream(bos);
      oos.writeObject(object);
      oos.flush();
      oos.close();
      return new Message(bos.toByteArray(), messageProperties);
    } catch (IOException e) {
      throw new MessageConversionException("Failed to convert object to Message", e);
    }
  }

  @Override
  public Object fromMessage(Message message) throws MessageConversionException {
    try {
      ByteArrayInputStream bis = new ByteArrayInputStream(message.getBody());
      ObjectInputStream ois = new ObjectInputStream(bis);
      return ois.readObject();
    } catch (IOException | ClassNotFoundException e) {
      throw new MessageConversionException("Failed to convert Message to object", e);
    }
  }

}
